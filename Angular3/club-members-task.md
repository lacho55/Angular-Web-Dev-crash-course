
# Свързване на Angular фронт-енд с бек-енд

## 🎯 Цел
Да се направи пълна интеграция между Angular фронт-енд и вече съществуващ бек-енд, който предоставя API за управление на клубни членове (Club Members). Функционалността трябва да включва:
- Извеждане на списък с членове
- Добавяне на нов член
- Изтриване на съществуващ член

---

## 🛠️ Задачи

### 1. Създаване на `ClubMemberService`
- Създай Angular service (`ng generate service services/club-member`) за връзка с бек-енда.
- Включи методи:
  - `getAll(): Observable<ClubMember[]>`
  - `add(member: ClubMember): Observable<any>`
  - `delete(id: number): Observable<any>`

```ts
@Injectable({ providedIn: 'root' })
export class ClubMemberService {
  private apiUrl = 'https://your-backend/api/club-members';

  constructor(private http: HttpClient) {}

  getAll(): Observable<ClubMember[]> {
    return this.http.get<ClubMember[]>(this.apiUrl);
  }

  add(member: ClubMember): Observable<any> {
    return this.http.post(this.apiUrl, member);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
```

---

### 2. Компонент за списък с членове (`ClubMembersComponent`)
- Използвай `ClubMemberService` за зареждане на членовете при `ngOnInit`.
- Извикай `delete(id)` при натискане на бутона 🗑.
- Бутона ➕ трябва да води към `/club-members/add`.

#### Шаблон:
```html
<h1 class="page-title">Club Members</h1>

<a (click)="goAdd()" class="btn-add-member">➕ Add Club Member</a>

<table class="user-table">
  <thead>
    <tr><th>Name</th><th>Email</th><th>Phone</th><th></th></tr>
  </thead>
  <tbody>
    @for (user of clubMembers; track user.id) {
      <tr>
        <td>{{user.id}} {{user.firstName}} {{user.lastName}}</td>
        <td>{{user.email}}</td>
        <td>{{user.phone}}</td>
        <td>
          <button (click)="deleteUser(user.id)" class="btn-delete">🗑 Delete</button>
        </td>
      </tr>
    }
  </tbody>
</table>
```

---

### 3. Компонент за добавяне на член (`AddClubMemberComponent`)
- Създай reactive форма с полетата `firstName`, `lastName`, `email`, `phone`.
- При `submit`, извикай `clubMemberService.add()` и пренасочи към `/club-members`.

#### Шаблон:
```html
<h2>Add Club Member</h2>

<form [formGroup]="form" (ngSubmit)="onSubmit()" class="form-container">
  <label>First Name:<input type="text" formControlName="firstName" /></label>
  <label>Last Name:<input type="text" formControlName="lastName" /></label>
  <label>Email:<input type="email" formControlName="email" /></label>
  <label>Phone:<input type="text" formControlName="phone" /></label>

  <button type="submit" [disabled]="form.invalid">Save</button>
  <a routerLink="/club-members" class="cancel-link">Cancel</a>
</form>
```

---

### 4. Routing
- Конфигурирай routing модул с необходимите маршрути:

```ts
const routes: Routes = [
  { path: 'club-members', component: ClubMembersComponent },
  { path: 'club-members/add', component: AddClubMemberComponent },
  { path: '', redirectTo: '/club-members', pathMatch: 'full' },
];
```

---

## ✅ Очаквани резултати
- [ ] Потребителят вижда таблица с членове, заредена от бек-енда.
- [ ] Може да добавя нови членове чрез форма.
- [ ] Може да изтрива членове.
- [ ] При всяка операция се изпраща заявка към бек-енда.

---

## 🧪 Допълнително
- Добави валидации към формата (напр. задължителни полета, валиден имейл).
- Показвай съобщения за успех или грешка при добавяне/изтриване.

---
