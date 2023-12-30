import { Component } from '@angular/core';
import {
  faDiamond, faMessage, faBell,
  faArrowLeft, faArrowRight, faPlusCircle,
  faPlusSquare, faPlane, faRandom, faClock, faStopwatch,
  faUsersRectangle, faCircle, faNewspaper, faAddressCard, faCreditCard, faGear, faHandsHelping, faLightbulb
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  myCards = 'My Cards 1/2';
  title = 'dashboard';
  notificationText = "Stay updated with our latest feature by receiving notifications from us!";
  learnMore = "learn More";
  closeButton = "&#x2715;";
  hideNotification = true;
  faDiamond = faDiamond;
  faMessage = faMessage;
  faBell = faBell;
  creditCard = "assets/credit-card.png";
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  faPlusCircle = faPlusCircle;
  faPlusSquare = faPlusSquare;
  faUsersRectangle = faUsersRectangle;
  faPlane = faPlane;
  faRandom = faRandom;
  faClock = faClock;
  faStopwatch = faStopwatch;
  faCircle = faCircle;
  faNewspaper = faNewspaper;
  faAddressCard = faAddressCard;
  faCreditCard = faCreditCard;
  faGear = faGear;
  faHandsHelping = faHandsHelping;
  faLightbulb = faLightbulb;
  addNewCard = "Add New Card";
  quickActions = "Quick Actions";
  tapUp = "Tap Up";
  transfer = "Transfer";
  withdrawl = "Withdrawl";
  savingPlan = "Saving Plan";
  newWatch = "New Watch";
  OneK = 1000;
  fiftyPercent = "50%";
  thirtyFivePercent = "35%";
  total = "Total";
  target = "Target";
  twoK = 2000;
  hexaBank = "Hexa Bank";
  clientName = "Sudhanshu Jain";
  totalBalance = "Total Balance";
  moneyStatistics = "Money Statistics";
  totalIncome = "Total Income";
  totalIncomeAmount = 570000.00;
  totalExpense = "Total Expense";
  totalExpenseAmount = 356000.00;
  totalInvestment = "Total Investment";
  totalInvestmentAmount = 114000.00;
  totalBalanceAmount = 120000.00;
  tenThousandFiveHundred = 10500;
  thirtyFiveThousand = 35000;
  leftArrow = "< ";
  rightArrow = ">";
  menuText = "MENU";
  generalText = "GENERAL";
  OverviewText = "Overview";
  TransactionsText = "Transactions";
  analyticsText = "Analytics";
  cardsText = "Cards";
  settingsText = "Settings";
  helpSupportText = "Help/Support";
  darkText = "Dark Mode";
  lightText = "Light Mode";
  monthlyPaymentLimit = "Monthly Payment Limit";
  overView = false;
  transactionsection = false;
  analyticsSection = false;
  cardsSection = false;
  settingsSection = false;
  helpSection = false;
  darkLightSection = false;

  closeNotification() {
    this.hideNotification = false;
  }

  onMouseEnter(menuItem: string) {
    if (menuItem === 'overview') {
      this.overView = true;
      this.transactionsection = false;
      this.cardsSection = false;
      this.analyticsSection = false;
      this.settingsSection = false;
      this.helpSection = false;
      this.darkLightSection = false;
    }

    if (menuItem === 'transaction') {
      this.transactionsection = true;
      this.overView = false;
      this.cardsSection = false;
      this.analyticsSection = false;
      this.settingsSection = false;
      this.helpSection = false;
      this.darkLightSection = false;
    }

    if (menuItem === 'analytics') {
      this.transactionsection = false;
      this.overView = false;
      this.cardsSection = false;
      this.analyticsSection = true;
      this.settingsSection = false;
      this.helpSection = false;
      this.darkLightSection = false;
    }

    if (menuItem === 'cards') {
      this.transactionsection = false;
      this.overView = false;
      this.cardsSection = true;
      this.analyticsSection = false;
      this.settingsSection = false;
      this.helpSection = false;
      this.darkLightSection = false;
    }

    if (menuItem === 'settings') {
      this.transactionsection = false;
      this.overView = false;
      this.cardsSection = false;
      this.analyticsSection = false;
      this.settingsSection = true;
      this.helpSection = false;
      this.darkLightSection = false;
    }

    if (menuItem === 'help') {
      this.transactionsection = false;
      this.overView = false;
      this.cardsSection = false;
      this.analyticsSection = false;
      this.settingsSection = false;
      this.helpSection = true;
      this.darkLightSection = false;
    }

    if (menuItem === 'darkLight') {
      this.transactionsection = false;
      this.overView = false;
      this.cardsSection = false;
      this.analyticsSection = false;
      this.settingsSection = false;
      this.helpSection = false;
      this.darkLightSection = true;
    }
  }

  setAllPropertiesToFalse() {
      this.transactionsection = false;
      this.overView = false;
      this.cardsSection = false;
      this.analyticsSection = false;
      this.settingsSection = false;
      this.helpSection = false;
      this.darkLightSection = false;
  }

  onMouseOut(someVal: string | null) {
    this.setAllPropertiesToFalse();
 }
}