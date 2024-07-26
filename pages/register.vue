<template>
    <div class="register-container">
        <div class="register-form">
            <h2>สมัครสมาชิก</h2>
            <p>กรุณากรอกข้อมูลด้านล่าง</p>
            <form @submit.prevent="register">
                <input type="firstname" v-model="firstname" placeholder="ชื่อจริง" required />
                <input type="lastname" v-model="lastname" placeholder="นามสกุล" required />
                <input type="email" v-model="email" placeholder="อีเมล" required />
                <input type="password" v-model="password" placeholder="พาสเวิร์ด" required />
                <button type="submit">สร้างบัญชีผู้ใช้</button>
            </form>
            <p class="signup-prompt">
                มีบัญชีผู้ใช้อยู่แล้ว ? <NuxtLink to="/login">เข้าสู่ระบบ</NuxtLink>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        };
    },
    methods: {
        async register() {
            this.isLoading = true;
            this.error = null;

            try {
                const response = await this.$axios.$post('/auth/register', {
                    firstname: this.firstname,
                    lastname: this.lastname,
                    email: this.email,
                    password: this.password
                });
                if (response) {
                    console.log(response.message)
                }
                
                this.$router.push('/login');
                console.log('Register successful:', response);
            } catch (error) {
                this.error = error.response ? error.response.data.message : 'Something went wrong';
                console.error('Login error:', this.error);
            } finally {
                this.isLoading = false;
            }
        }
    }
};
</script>

<style scoped>
.register-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 1rem;
}

.register-form {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    text-align: center;
    width: 100%;
    max-width: 400px;
}

.register-form h2 {
    margin-bottom: 1rem;
}

.register-form p {
    margin-bottom: 1.5rem;
}

.register-form input {
    display: block;
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    width: 100%;
    background-color: #ff9900;
    border: 1px solid #a88734;
    color: #111;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #ebce8c;
}

.signup-prompt {
    margin-top: 1rem;
}

.signup-prompt a {
    color: #007bff;
    text-decoration: none;
}

.signup-prompt a:hover {
    text-decoration: underline;
}

/* Responsive Styles */
@media (max-width: 768px) {
    .register-form {
        padding: 1.5rem;
    }
}

@media (max-width: 480px) {
    .register-form {
        padding: 1rem;
    }

    .form-footer {
        flex-direction: column;
        align-items: flex-start;
    }

    .form-footer .forgot-password {
        margin-top: 0.5rem;
    }
}
</style>