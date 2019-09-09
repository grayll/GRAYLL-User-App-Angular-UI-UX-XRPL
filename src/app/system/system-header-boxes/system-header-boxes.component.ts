import { Component, OnInit } from '@angular/core';
import {faBell, faInfoCircle, faSearch} from '@fortawesome/free-solid-svg-icons';
import {CountdownConfig} from 'ngx-countdown/src/countdown.config';
import {AlgoPositionModel} from '../algo-position.model';
import {Router} from '@angular/router';
import {SharedService} from '../../shared/shared.service';
import {ErrorService} from '../../shared/error/error.service';
import {CustomModalService} from '../../shared/custom-modal.service';
import {AlgoNotificationModel} from '../../notifications/notification.model';
import {NotificationsService} from '../../notifications/notifications.service';

@Component({
  selector: 'app-system-header-boxes',
  templateUrl: './system-header-boxes.component.html',
  styleUrls: [
    './system-header-boxes.component.scss',
    '../../shared/custom-modal.scss'
  ]
})
export class SystemHeaderBoxesComponent implements OnInit {
  
  GRXValue: string;
  totalGRX: number;
  selectedTab: any;
  algoPosition: AlgoPositionModel;
  algoNotifications: AlgoNotificationModel[];
  bodyText: string;
  countdownConfig: CountdownConfig = {
    leftTime: 60,
    template: '$!s!',
    effect: null,
    demand: false
  };
  algoItems = [
    {
      id: 'GRY 1',
      name: 'GRY | 1',
      value: 'Balthazar',
      token: 'GRY',
      tabName: 'Balthzr'
    },
    {
      id: 'GRY 2',
      name: 'GRY | 2',
      value: 'Kaspar',
      token: 'GRY',
      tabName: 'Kaspar'
    },
    {
      id: 'GRY 3',
      name: 'GRY | 3',
      value: 'Melkior',
      token: 'GRY',
      tabName: 'Melkior'
    },
    {
      id: 'GRZ',
      name: 'GRZ',
      value: 'Arkady',
      token: 'GRZ',
      tabName: 'Arkady'
    }
  ];
  
  // Font Awesome Icons
  faInfo = faInfoCircle;
  faSearch = faSearch;
  faBell = faBell;

  constructor(
    private router: Router,
    private sharedService: SharedService,
    private errorService: ErrorService,
    private customModalService: CustomModalService,
    public notificationsService: NotificationsService
  ) {
    this.GRXValue = null;
    this.totalGRX = 99999999999.99998;
    this.selectedTab = this.algoItems[0];
    this.algoPosition = new AlgoPositionModel(null, this.selectedTab.name);
    this.algoNotifications = [
      new AlgoNotificationModel(
        1,
        'GRZ | Arkady',
        '0.11% ROI Increase | 18.81% Total Position ROI',
        10108181408618385411,
        false,
        Date.now()
      ),
      new AlgoNotificationModel(
        2,
        'GRZ | Arkady',
        '0.11% ROI Increase | 18.81% Total Position ROI',
        10108181408618385411,
        false,
        Date.now()
      ),
      new AlgoNotificationModel(
        10,
        'GRZ | Arkady',
        '0.11% ROI Increase | 18.81% Total Position ROI',
        10108181408618385411,
        false,
        Date.now()
      ),
      new AlgoNotificationModel(
        11,
        'GRZ | Arkady',
        '0.11% ROI Increase | 18.81% Total Position ROI',
        10108181408618385411,
        false,
        Date.now()
      ),
      new AlgoNotificationModel(
        12,
        'GRZ | Arkady',
        '0.11% ROI Increase | 18.81% Total Position ROI',
        10108181408618385411,
        false,
        Date.now()
      )
    ];
  }

  ngOnInit() {
    this.bodyText = 'This text can be updated in modal 1';
  }

  populateMaxGRX() {
    this.GRXValue = this.totalGRX.toString();
  }

  didChangeTab(id: string) {
    const algoItem = this.algoItems.find((i) => i.id === id);
    this.selectedTab = algoItem;
    this.algoPosition.item = algoItem.name;
  }

  scrollToSystemActivity() {
    const el = document.getElementById('systemActivityTable');
    el.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }

  openAlgoPosition() {
    this.errorService.clearError();
    if (this.clientValidation()) {
      this.populateAlgoModel();
      this.openPopup();
    }
  }

  private clientValidation(): boolean {
    if (!this.algoPosition.usdValue && !this.algoPosition.itemAmount && !this.GRXValue) {
      this.errorService.handleError(null, 'Please enter a value of ~$10 or more in one of the fields.');
      return false;
    }
    if (this.algoPosition.usdValue && !this.isValidNumber(this.algoPosition.usdValue)) {
      this.errorService.handleError(null, 'Please enter a valid USD Value.');
      return false;
    }
    if (this.algoPosition.usdValue && +this.algoPosition.usdValue < 10) {
      this.errorService.handleError(null, 'Minimum USD Value is $10.');
      return false;
    }
    if (this.GRXValue && !this.isValidNumber(this.GRXValue)) {
      this.errorService.handleError(null, 'Please enter a valid GRX Amount.');
      return false;
    }
    if (this.GRXValue && +this.GRXValue < 10) {
      this.errorService.handleError(null, 'Minimum GRX Amount is $10.');
      return false;
    }
    if (this.algoPosition.itemAmount && !this.isValidNumber(this.algoPosition.itemAmount)) {
      this.errorService.handleError(null, 'Please enter a valid amount.');
      return false;
    }
    if (this.algoPosition.itemAmount && +this.algoPosition.itemAmount < 10) {
      this.errorService.handleError(null, 'Minimum amount is $10.');
      return false;
    }
    return true;
  }

  private populateAlgoModel() {
    this.algoPosition.grxAmount = +this.GRXValue;
    this.algoPosition.itemAmount = +this.algoPosition.itemAmount;
    this.algoPosition.usdValue = +this.algoPosition.usdValue;
    this.algoPosition.token = this.selectedTab.id;
  }

  private openPopup() {
    this.sharedService.openAlgoPosition(this.algoPosition);
    this.router.navigate(['/system/overview', {outlets: {popup: 'open-algo-position-success'}}]);
  }

  private isValidNumber(value: string): boolean {
    const num = Number(value);
    return !isNaN(num);
  }

  openModal(id: string) {
    this.customModalService.open(id);
  }

  markAlgoNotificationAsRead(notification: AlgoNotificationModel) {
    if (!notification.isRead) {
      notification.isRead = true;
      this.notificationsService.decreaseNumberOfAllUnreadNotifications();
      this.notificationsService.decreaseNumberOfUnreadAlgoNotifications();
    }
  }

}
