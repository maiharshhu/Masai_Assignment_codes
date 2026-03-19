// DeviceFactory.ts
import {
  Device,
  AppleLaptop,
  ApplePhone,
  SamsungLaptop,
  SamsungPhone,
} from "./Device";

export abstract class DeviceFactory {
  abstract createDevice(type: "Laptop" | "Phone"): Device | null;
}

export class AppleFactory extends DeviceFactory {
  createDevice(type: "Laptop" | "Phone"): Device | null {
    if (type === "Laptop") return new AppleLaptop();
    if (type === "Phone") return new ApplePhone();
    return null;
  }
}

export class SamsungFactory extends DeviceFactory {
  createDevice(type: "Laptop" | "Phone"): Device | null {
    if (type === "Laptop") return new SamsungLaptop();
    if (type === "Phone") return new SamsungPhone();
    return null;
  }
}
