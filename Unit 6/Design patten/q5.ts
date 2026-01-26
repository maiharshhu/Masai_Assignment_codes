// 1. Create the interface
interface MediaFile {
    play(): void;
}

// 2. Implement specific file types
class AudioFile implements MediaFile {
    play(): void {
        console.log("Playing audio file...");
    }
}

class VideoFile implements MediaFile {
    play(): void {
        console.log("Playing video file...");
    }
}

class PDFFile implements MediaFile {
    play(): void {
        console.log("Displaying PDF document...");
    }
}

// 3. Create the MediaPlayer class
class MediaPlayer {
    // This class is "loosely coupled" because it depends on the 
    // interface (MediaFile) rather than concrete classes.
    playFile(file: MediaFile): void {
        file.play();
    }
}

// Execution
const player = new MediaPlayer();

const audio = new AudioFile();
const video = new VideoFile();
const pdf = new PDFFile();

player.playFile(audio); // Output: Playing audio file...
player.playFile(video); // Output: Playing video file...
player.playFile(pdf);   // Output: Displaying PDF document...