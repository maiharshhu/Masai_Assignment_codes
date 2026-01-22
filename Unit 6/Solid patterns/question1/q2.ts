interface ShippingType {
    getCost(): number;
}

class StandardShipping implements ShippingType {
    getCost() { return 50; }
}

class ExpressShipping implements ShippingType {
    getCost() { return 100; }
}

class Shipping {
    calculate(type: ShippingType): number {
        return type.getCost();
    }
}

// Usage: You can now add "DroneShipping" without touching the Shipping class!