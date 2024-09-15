import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-file-manager',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './file-manager.component.html',
  styleUrl: './file-manager.component.scss'
})
export class FileManagerComponent {

  files: File[] = [];

  @Output() fileAdded = new EventEmitter<File>();
  @Output() fileRemoved = new EventEmitter<File>();

  onFileSelect($event: Event) {
   // Cast the event target to an HTMLInputElement
  const input = $event.target as HTMLInputElement;

  // Check if the input element has files
  if (input?.files) {
    // Convert FileList to an array
    const selectedFiles = Array.from(input.files) as File[];

    selectedFiles.forEach(file => {
      this.files.push(file);
      this.fileAdded.emit(file);
    });
  }

    }

  removeFile(file: File): void {
    this.files = this.files.filter(f => f !== file);
    this.fileRemoved.emit(file);
  }

  FilePDF(file: File): boolean{
    return file.type === 'application/pdf';
    }

  FileImage(file: File): boolean {
    return file.type
    .startsWith('image/');
    }

  fileUrl(file: File): string {
    return URL.createObjectURL(file);
    }
}
