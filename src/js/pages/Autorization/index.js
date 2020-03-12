import './style.scss'
import AuthService from "../../services/AuthService.js"
export default class Autorization {
  constructor() {
    this.auth = new AuthService();
  }
  render() {
    return /* html */ `
    <div class="card sign-up-card">
    <form class="needs-validation" name="sign-up" novalidate>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationCustom01">First name</label>
      <input type="text" class="form-control" id="validationCustom01" value="Mark" required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationCustom02">Last name</label>
      <input type="text" class="form-control" id="validationCustom02" value="Otto" required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationCustomUsername">Username</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroupPrepend">@</span>
        </div>
        <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required>
        <div class="invalid-feedback">
          Please choose a username.
        </div>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationCustom03">City</label>
      <input type="text" class="form-control" id="validationCustom03" required>
      <div class="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationCustom04">State</label>
      <select class="custom-select" id="validationCustom04" required>
        <option selected disabled value="">Choose...</option>
        <option>...</option>
      </select>
      <div class="invalid-feedback">
        Please select a valid state.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationCustom05">Zip</label>
      <input type="text" class="form-control" id="validationCustom05" required>
      <div class="invalid-feedback">
        Please provide a valid zip.
      </div>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>

</div>`
  }

  afterRender() {
    let form = document.forms["sign-up"];
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let userInfo = {
         /*  firstName: form.validationCustom02['Email'].value,
          lastName: form.validationCustom02['First Name'].value,
          userName: form.validationCustomUsername['Username'],
          city: form.validationCustom03['City'].value,
          state: form.validationCustom04['State'].value,
          zip: form.validationCustom05['Zip'].value */
          email: "gibajax553@provamail.com",
          password: "54321ytrewq",
          nickname: "dmgame",
          first_name: "Yura",
          last_name: "p",
          phone: "0631234567",
          gender_orientation: "male", // or "female"
          city: "Kharkiv",
          country: "Ukrane",
          date_of_birth_day: "01",
          date_of_birth_month: "03",
          date_of_birth_year: "1989"
        }
        //if (!userInfo.firstName || !userInfo.lastName || !userInfo.userName || !userInfo.city || !userInfo.state) return;

        this.auth.autorization(userInfo).then((response) => {
            if (response['error'] == true) {
              location.hash = 'autorization';
            }
          })
        })
    }
  }