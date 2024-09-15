import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FileManagerComponent } from './file-manager.component';

describe('FileManagerComponent', () => {
  let component: FileManagerComponent;
  let fixture: ComponentFixture<FileManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileManagerComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create FileManagerComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should add files to the list', () => {
    const file = new File(['content'], 'test-file.pdf', { type: 'application/pdf' });

    // Create a mock event
    const event = { target: { files: [file] } } as unknown as Event;

    // Call the method with the mock event
    component.onFileSelect(event);

    expect(component.files.length).toBe(1);
    expect(component.files[0].name).toBe('test-file.pdf');
  });


  it('should emit event when file is added', () => {
    spyOn(component.fileAdded, 'emit');
    const file = new File(['content'], 'test-file.pdf', { type: 'application/pdf' });

    // Create a mock event
    const event = { target: { files: [file] } } as unknown as Event;

    // Call the method with the mock event
    component.onFileSelect(event);

    expect(component.fileAdded.emit).toHaveBeenCalledWith(file);
  });


  it('should emit event when file is removed', () => {
    spyOn(component.fileRemoved, 'emit');
    const file = new File(['content'], 'test-file.pdf', { type: 'application/pdf' });
    component.files = [file];
    component.removeFile(file);
    expect(component.fileRemoved.emit).toHaveBeenCalledWith(file);
    expect(component.files.length).toBe(0);
  });

  it('should preview image files', () => {
    const file = new File([''], 'test-image.png', { type: 'image/png' });
    expect(component.FileImage(file)).toBeTrue();
    expect(component.FilePDF(file)).toBeFalse();
  });

  it('should preview PDF files', () => {
    const file = new File([''], 'test-document.pdf', { type: 'application/pdf' });
    expect(component.FilePDF(file)).toBeTrue();
    expect(component.FileImage(file)).toBeFalse();
  });
});
