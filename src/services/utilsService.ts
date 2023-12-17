export function capitalizeWords(input: string): string {
    // Split the input string into words
    const words = input.split(/\s+/);

    // Capitalize the first letter of each word and make the rest lowercase
    const capitalizedWords = words.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    // Join the words back together with spaces
    const result = capitalizedWords.join(' ');

    return result;
}