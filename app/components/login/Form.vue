<template>
  <div class="popup-wrapper">
    <div class="popup-login-top">
      <div class="popup-login-logo">
        <img src="~/assets/images/logo.png" class="logo-bgWhite" />
      </div>
    </div>

    <div class="login-form-wrapper">
      <form @submit.prevent="onSubmitHandler">
        <div class="login-form-title">
          <div class="login-form-icon" />
          Login
        </div>

        <div class="input-wrapper">
          <input
            v-model="username"
            id="username"
            required
            placeholder="UserID"
            maxlength="15"
          />
        </div>
        <div class="input-wrapper">
          <input
            v-model="password"
            id="password"
            type="password"
            required
            placeholder="Password"
          />
        </div>
        <input class="submit" value="LOGIN" type="submit" />
      </form>
    </div>

    <div class="popup-login-register">
      <hr />
      <a href="/en/registration">Don't have account? <b>Register Now!</b></a>
      <a href="#" onclick="LiveChatWidget.call('maximize')">Forget Password?</a>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const { locale } = useI18n();

const username = ref("");
const password = ref("");

const onSubmitHandler = async (e: Event) => {
  e.preventDefault();
  // Handle login logic here
  try {
    const res = await $fetch("/api/login", {
      method: "POST",
      body: {
        username: username.value,
        password: password.value,
      },
    });
    const json = JSON.parse(res);
    if (json.Login === 0) window.location.href = json.Redirect;
    else alert(json.Text || "Login failed, please try again.");
  } catch (err) {
    console.log(err);
    alert("An error occurred while logging in.");
  }
};
</script>

<style scoped lang="scss">
.popup-wrapper {
  padding: 25px;

  .popup-login-top {
    .popup-login-logo {
      display: flex;
      justify-content: center;
      text-align: center;
      padding-top: 10px;

      img {
        height: 50px;
      }
    }
  }

  .login-form-wrapper {
    padding-top: 50px;

    .login-form-title {
      text-align: center;
      font-size: 18px;
      margin-top: -50px;
      color: #000;

      .login-form-icon {
        width: 70px;
        height: 70px;
        margin: 0 auto 5px;
        background-image: url("~/assets/images/icn-userlogin_active-2021.png?v1");
        background-size: 100%;
        background-color: #fff;
        border-radius: 50%;
      }
    }

    form {
      border: 1px solid #16aaff;
      border-radius: 15px;
      padding: 25px 25px;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
      box-shadow: 0 0 25px #16aaff;

      input {
        padding: 10px 15px;
        border: 0px solid #ccc;
        border-bottom: 1px solid #ccc;
        margin: 5px auto;
        width: 100%;
        color: #000;
        font-size: 14px;
        outline: 0;
      }

      .submit {
        color: #fff;
        font-weight: 600;
        border-top: 1px solid #16aaff;
        border-bottom: 1px solid #175087;
        background: linear-gradient(
          0deg,
          rgba(23, 80, 120, 1) 00%,
          rgba(22, 170, 255, 1) 100%
        );
        font-size: 18px;
        text-transform: uppercase;
        border-radius: 10px;
        cursor: pointer;
        margin-bottom: 55px;
      }
    }
  }

  .popup-login-register {
    padding-bottom: 15px;
    hr {
      margin-top: 20px;
      margin-bottom: 20px;
      border: 0;
      border-top: 1px solid #eee;
    }

    a {
      display: table;
      padding: 10px;
      margin: 0 auto;
      color: #011a27;
      text-decoration: underline;
    }
  }
}
</style>
