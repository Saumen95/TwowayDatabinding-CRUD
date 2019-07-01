import { Component, NgModule } from "@angular/core";

export class Student {
  ID: number;
  Name: string;
  RollNo: string;
}

const studentArray: Student[] = [
  { ID: 1, Name: "Soma", RollNo: "1503023" },
  { ID: 2, Name: "Saumen", RollNo: "1503024" },
  { ID: 3, Name: "Sushama", RollNo: "1503025" }
];

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "twowayCrud";
  studentCollection = studentArray;
  selectedStudent: Student = { ID = 0, Name = "", RollNo = "" };
  OpenForEdit(student: Student): void {
    this.selectedStudent = Student;
  }

  addorEdit(): void {
    // tslint:disable-next-line: triple-equals
    if (this.selectedStudent.ID == 0) {
      // tslint:disable-next-line: only-arrow-functions
      this.selectedStudent.ID =
        Math.max.apply(
          Math,
          // tslint:disable-next-line: only-arrow-functions
          this.studentCollection.map(function(x) {
            return x.ID;
          })
        ) + 1;
      this.studentCollection.push(this.selectedStudent);
    }

    this.selectedStudent = { ID: 0, Name: "", RollNo: "" };
  }

  Delete(): void {
    // tslint:disable-next-line: triple-equals
    this.studentCollection = this.studentCollection.filter(
      // tslint:disable-next-line: triple-equals
      x => x != this.selectedStudent
    );
    this.selectedStudent = { ID: 0, Name: "", RollNo: "" };
  }
}
