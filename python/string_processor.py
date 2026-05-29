import re

def reverse_string(s: str) -> str:
    """Reverse a given string."""
    return s[::-1]


def count_vowels(s: str) -> int:
    """Count the number of vowels in a string."""
    vowels = "aeiouAEIOU"
    return sum(1 for char in s if char in vowels)


def is_palindrome(s: str) -> bool:
    """Check if the string is a palindrome, ignoring non-alphanumeric characters."""
    cleaned = re.sub(r'[^a-zA-Z0-9]', '', s).lower()
    return cleaned == cleaned[::-1]
