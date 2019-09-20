import {Component, OnDestroy, OnInit} from '@angular/core';
import {faChartLine, faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';
import {UserModel} from '../models/user.model';
import {UserService} from '../authorization/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  faChartLine = faChartLine;
  faWarning = faExclamationTriangle;

  user: UserModel;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.user = this.userService.getUser();
  }

  ngOnInit(): void {
    this.changeBackgroundColor(true);
    this.showActivationPopup();
  }

  ngOnDestroy(): void {
    this.changeBackgroundColor(false);
  }

  private changeBackgroundColor(addClass: boolean) {
    const body = document.getElementsByTagName('body')[0];
    addClass ? body.classList.add('dark-navy-background') : body.classList.remove('dark-navy-background');
  }

  private showActivationPopup() {
    if (!this.user.isAccountActivated) {
      this.router.navigate([{outlets: {popup: 'activate-account'}}], {relativeTo: this.route});
    }
  }
}
