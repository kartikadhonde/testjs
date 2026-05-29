package main

import (
	"fmt"
	"strings"
)

// Config represents a simple server configuration
type Config struct {
	Port    int
	Host    string
	Version string
}

// FormatAddress returns a connection string address
func (c *Config) FormatAddress() string {
	return fmt.Sprintf("%s:%d", c.Host, c.Port)
}

// IsValidHost checks if host is non-empty and formatted simply
func (c *Config) IsValidHost() bool {
	cleaned := strings.TrimSpace(c.Host)
	return len(cleaned) > 0
}
