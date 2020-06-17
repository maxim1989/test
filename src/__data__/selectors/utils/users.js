export const findNextSource = (index, letter) => {
    if (index[letter]) {
        return index[letter]
    }

    return {}
}