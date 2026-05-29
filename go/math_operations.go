package main

import (
	"errors"
)

// Add sums two integers
func Add(a int, b int) int {
	return a + b
}

// Divide divides two float64 numbers and checks for division by zero
func Divide(a float64, b float64) (float64, error) {
	if b == 0.0 {
		return 0.0, errors.New("cannot divide by zero")
	}
	return a / b, nil
}

// Max returns the maximum of two integers
func Max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
