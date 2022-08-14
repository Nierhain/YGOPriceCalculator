namespace YGOPriceCalculator.Core.Models;

public class ValidationResult
{
    public bool IsSuccessful { get; set; } = true;
    public string Error { get; init; }

    public static ValidationResult Success => new();
    public static ValidationResult Fail(string error) => new() { IsSuccessful = false, Error = error };
}