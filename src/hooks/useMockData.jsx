import vehicle_manufacturers from "../mockData/vehicle_manufacturers"
import service_packages from "../mockData/service_packages"

const useMockData = () => {

    const getVehicleManufacturers = () => {
        return vehicle_manufacturers
    }

    const getServicePackages = () => {
        return service_packages
    }

    return {
        getVehicleManufacturers,
        getServicePackages
    }
}

export default useMockData