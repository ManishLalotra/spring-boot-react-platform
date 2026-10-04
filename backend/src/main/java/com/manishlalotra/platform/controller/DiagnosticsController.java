package com.manishlalotra.platform.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/diagnostics")
@CrossOrigin(origins = "*")
public class DiagnosticsController {

    @GetMapping
    public ResponseEntity<Map<String, Object>> getDiagnostics() {
        return ResponseEntity.ok(Map.of(
            "status", "healthy",
            "timestamp", Instant.now().toString(),
            "framework", "Spring Boot 3.3.1 (Java 21)",
            "author", "Manish Lalotra",
            "role", "Full Stack Developer & DevOps Engineer",
            "services", Map.of(
                "database", "connected",
                "cache", "active",
                "actuator", "enabled"
            )
        ));
    }
}
