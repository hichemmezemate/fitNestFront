import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../interface/user';
import { GestionUtilisateursService } from '../service/gestionUtilisateurs/gestion-utilisateurs.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {
  id: string | null = null;

  constructor(private route: ActivatedRoute, private userService: GestionUtilisateursService, private router: Router) {}

  userInfo: any


  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    let userId = +this.id!;

    this.userService.getUser(userId).subscribe(
      (data: User) => {
        this.userInfo = data;
        console.log('the real info ',this.userInfo )
        
      },
      error => {
        alert(error);
      }
    );
  }

  onSelectionChange(option: any){
    option.selected = !option.selected;
  }

  submit(data: any) {
    console.log('Updated user:', data.admin);
    if(data.admin == true) {
      data.role = [
        {
          "id": 1,
          "nom": "Admin"
        }
      ]
    }  else {
      data.role = []
    }
    data.programme = this.userInfo.programme
    delete data.admin;
    // data.role = this.userInfo.role
    data.id = this.userInfo.id
    console.log(data)

    this.userService.updateUser(data).subscribe({
      next: (result: any) => {
        this.router.navigate(['/gestionUtilisateurs']);
      },
      error: (error: any) => {
        alert('Update failed:');
      }
    })

  }

}
