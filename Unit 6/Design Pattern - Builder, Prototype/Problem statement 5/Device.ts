// Device.ts
export interface Device {
  specifications(): void;
}

// Apple Concrete Devices
export class AppleLaptop implements Device {
  specifications(): void {
    console.log("Apple Laptop: MacBook Pro, M3 Chip, 16GB RAM");
  }
}

export class ApplePhone implements Device {
  specifications(): void {
    console.log("Apple Phone: iPhone 15, iOS 17, A16 Bionic");
  }
}

// Samsung Concrete Devices
export class SamsungLaptop implements Device {
  specifications(): void {
    console.log("Samsung Laptop: Galaxy Book, Windows 11, Intel i7");
  }
}

export class SamsungPhone implements Device {
  specifications(): void {
    console.log("Samsung Phone: Galaxy S24, Android 14, Snapdragon Gen 3");
  }
}
