# `Project setup`

#### database name: watchzone
#### database user: watchzone
#### database user password: watchzone


##### User Login `/api/v1/users/login`

#### 1. Form Field

##### method: `POST`

* Email`(string)`
* Password`(string)`

#### 2. User Register `/api/v1/users/register`

##### method: `POST`

#### Form Field
* Email`(string)`
* Password`(string)`
* confirmPassword`(string)`
* Phone`(Number)`
* Phone1 (Optional)`(Number)`
* firstName`(string)`
* lastName`(string)`

#### 3. User Profile Update `/api/v1/users/update/profile`

##### method: `PUT`

#### Form Field
* firstName`(string)`
* lastName`(string)`
* phone`(Number)`

#### 4. Contact Us `/api/v1/contact-us`

##### method: `POST`
##### method: `GET`

#### Form Field
* message`(string)`
* name`(string)`
* email`(string)`
* subject`(string)`