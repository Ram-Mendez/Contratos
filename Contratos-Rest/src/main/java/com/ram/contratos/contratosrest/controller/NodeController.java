package com.ram.contratos.contratosrest.controller;

import com.ram.contratos.contratosrest.classes.NodeInputDto;
import com.ram.contratos.contratosrest.classes.NodeTotals;
import com.ram.contratos.contratosrest.entities.ContratoEntity;
import com.ram.contratos.contratosrest.entities.InventoryNodeEntity;
import com.ram.contratos.contratosrest.repository.ContratosRepository;
import com.ram.contratos.contratosrest.repository.NodeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.*;

@RestController
public class NodeController {

    @Autowired
    private NodeRepository nodeRepository;
    @Autowired
    private ContratosRepository contratosRepository;

    @GetMapping("contrato/{id}/nodes")
    public List<InventoryNodeEntity> getNodes(@PathVariable Integer id, @RequestParam(required = false) Integer parentId) {
        if (parentId != null) {
            InventoryNodeEntity parent = nodeRepository.findById(parentId).orElseThrow(() -> new NoSuchElementException("Node not found" + parentId));
            return parent.getChildren();
        }
        ContratoEntity contrato = contratosRepository.findById(id).orElseThrow(() -> new NoSuchElementException("Contrato not found" + id));
        return nodeRepository.findByContratoAndParentIsNull(contrato);
    }

    @PostMapping("contrato/{id}/nodes")
    public InventoryNodeEntity createNode(@PathVariable Integer id, @RequestBody NodeInputDto nodeInputDto) {
        ContratoEntity contrato = contratosRepository.findById(id).orElseThrow(() -> new NoSuchElementException("Contrato not found" + id));
        InventoryNodeEntity node = new InventoryNodeEntity();
        node.setContrato(contrato);
        node.setDescription(nodeInputDto.getDescription());
        if (nodeInputDto.getParent() != null) {
            InventoryNodeEntity parent = nodeRepository.findById(nodeInputDto.getParent()).orElseThrow(() -> new NoSuchElementException("Parent not found" + nodeInputDto.getParent()));
            node.setParent(parent);
        }
        return nodeRepository.save(node);
    }

    @PutMapping("/nodes/{id}")
    public InventoryNodeEntity updateNode(@PathVariable Integer id, @RequestBody NodeInputDto nodeInputDto) {
        InventoryNodeEntity node = nodeRepository.findById(id).orElseThrow(() -> new NoSuchElementException("Node not found" + id));
        node.setDescription(nodeInputDto.getDescription());
        node.setPrice(nodeInputDto.getPrice());
        node.setQuantity(nodeInputDto.getQuantity());
        node.setVatPercentage(nodeInputDto.getVatPercentage());

        return nodeRepository.save(node);
    }

    @GetMapping("nodes/{id}/total")
    public NodeTotals getNodeTotal(@PathVariable Integer id) {
        InventoryNodeEntity node = nodeRepository.findById(id).orElseThrow(() -> new NoSuchElementException("Node not found" + id));

        return calculateNodeTotals(node);
    }

    private NodeTotals calculateNodeTotals(InventoryNodeEntity node) {
        NodeTotals nodeTotals = new NodeTotals();

        BigDecimal totalQuantity = node.getQuantity();
        BigDecimal totalInclVat = node.getTotalInclVat();
        BigDecimal totalPrice = node.getPrice();

        for (InventoryNodeEntity child : node.getChildren()) {
            NodeTotals childTotals = calculateNodeTotals(child);
            totalQuantity = totalQuantity.add(childTotals.getQuantity());
            totalInclVat = totalInclVat.add(childTotals.getTotalInclVat());
            totalPrice = totalPrice.add(childTotals.getPrice());
        }

        nodeTotals.setQuantity(totalQuantity);
        nodeTotals.setTotalInclVat(totalInclVat);
        nodeTotals.setPrice(totalPrice);

        return nodeTotals;
    }


    @DeleteMapping("nodes/{id}")
    public void deleteNode(@PathVariable Integer id) {
        InventoryNodeEntity node = nodeRepository.findById(id).orElseThrow(() -> new NoSuchElementException("Node not found" + id));
        nodeRepository.delete(node);

    }


}
