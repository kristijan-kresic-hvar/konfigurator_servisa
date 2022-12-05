const useHelpers = () => {

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    const formatPrice = (price) => {
        return price.toFixed(2).replace('.', ',')
    }

    return {
        capitalizeFirstLetter,
        formatPrice
    }
}

export default useHelpers