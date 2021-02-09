import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    $(document).ready(() => {
      const trees: any = $('[data-widget="tree"]');
      trees.tree();
    });
  }

}
