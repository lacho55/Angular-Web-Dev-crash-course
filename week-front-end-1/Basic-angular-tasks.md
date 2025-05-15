## Angular Beginner Tasks

Below are 10 beginner-friendly Angular tasks that introduce essential concepts like components, data binding, directives, services, forms, and styling. Each task comes with an explanation and complete example. Click to reveal the solution for each task.

---

### 1. Create a Basic Angular Component

**Description**: Create a new Angular component named `HelloComponent` that displays a message like "Hello from Angular!". This helps you understand the structure of an Angular component and how templates are linked to logic.

<details><summary>Click to show solution</summary>

#### HTML (`hello.component.html`):

```html
<p>Hello from Angular!</p>
```

#### TypeScript (`hello.component.ts`):

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html'
})
export class HelloComponent {}
```

</details>

---

### 2. Use String Interpolation

**Description**: Display a student name stored in a component class using `{{ }}` interpolation. This demonstrates how to dynamically bind text content to class properties.

<details><summary>Click to show solution</summary>

#### HTML:

```html
<p>Student name: {{ studentName }}</p>
```

#### TypeScript:

```ts
export class HelloComponent {
  studentName: string = 'Alex';
}
```

</details>

---

### 3. Property Binding with Image

**Description**: Show an image using `[src]` property binding. This task shows how to bind HTML properties to class variables.

<details><summary>Click to show solution</summary>

#### HTML:

```html
<img [src]="imageUrl" alt="Angular Logo" />
```

#### TypeScript:

```ts
export class HelloComponent {
  imageUrl: string = 'https://angular.io/assets/images/logos/angular/angular.png';
}
```

</details>

---

### 4. Event Binding

**Description**: Create a button that shows an alert when clicked. This introduces how to handle user events in Angular.

<details><summary>Click to show solution</summary>

#### HTML:

```html
<button (click)="showMessage()">Click Me</button>
```

#### TypeScript:

```ts
export class HelloComponent {
  showMessage() {
    alert('Button clicked!');
  }
}
```

</details>

---

### 5. Two-Way Binding with ngModel

**Description**: Create a text input and bind it to a variable with two-way binding. This demonstrates how to create real-time dynamic inputs.

<details><summary>Click to show solution</summary>

#### HTML:

```html
<input [(ngModel)]="studentName" placeholder="Enter name">
<p>Hello, {{ studentName }}!</p>
```

#### TypeScript:

```ts
export class HelloComponent {
  studentName: string = '';
}
```

**Note**: Don’t forget to import `FormsModule` in the `AppModule`.

</details>

---

### 6. Use \*ngIf Directive

**Description**: Show a message only if a variable `isVisible` is true. Learn conditional rendering with structural directives.

<details><summary>Click to show solution</summary>

#### HTML:

```html
<p *ngIf="isVisible">This is a conditional message.</p>
<button (click)="toggleVisibility()">Toggle Message</button>
```

#### TypeScript:

```ts
export class HelloComponent {
  isVisible: boolean = true;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
```

</details>

---

### 7. Use \*ngFor Directive

**Description**: Create a list of student names and display them with `*ngFor`. This helps loop through and render lists.

<details><summary>Click to show solution</summary>

#### HTML:

```html
<ul>
  <li *ngFor="let name of studentList">{{ name }}</li>
</ul>
```

#### TypeScript:

```ts
export class HelloComponent {
  studentList: string[] = ['Alex', 'Maria', 'John'];
}
```

</details>

---

### 8. Create a Simple Service

**Description**: Create a service named `StudentService` that returns a list of students. Understand service creation and dependency injection.

<details><summary>Click to show solution</summary>

#### TypeScript (`student.service.ts`):

```ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StudentService {
  getStudents() {
    return ['Alex', 'Maria', 'John'];
  }
}
```

#### Component using it:

```ts
constructor(private studentService: StudentService) {}

studentList: string[] = [];

ngOnInit() {
  this.studentList = this.studentService.getStudents();
}
```

</details>

---

### 9. Simple Reactive Form

**Description**: Build a form with Reactive Forms that collects a name and email. Learn to manage forms programmatically.

<details><summary>Click to show solution</summary>

#### HTML:

```html
<form [formGroup]="form">
  <input formControlName="name" placeholder="Name">
  <input formControlName="email" placeholder="Email">
  <button (click)="submit()">Submit</button>
</form>
```

#### TypeScript:

```ts
import { FormGroup, FormControl } from '@angular/forms';

form = new FormGroup({
  name: new FormControl(''),
  email: new FormControl('')
});

submit() {
  console.log(this.form.value);
}
```

**Note**: Import `ReactiveFormsModule` in your module.

</details>

---

### 10. Basic CSS Styling

**Description**: Add custom styling to a paragraph using a component-specific CSS file. Learn how Angular CSS scoping works.

<details><summary>Click to show solution</summary>

#### HTML:

```html
<p class="highlight">Styled Text</p>
```

#### CSS (`hello.component.css`):

```css
.highlight {
  color: white;
  background-color: #007bff;
  padding: 10px;
  border-radius: 5px;
}
```

</details>

---
