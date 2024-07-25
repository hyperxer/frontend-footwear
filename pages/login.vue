<template>
    <div class="login-container">
        <div class="login-form">
            <h2>ล็อคอิน</h2>
            <p>กรุณากรอกอีเมลและพาสเวิร์ด:</p>
            <form @submit.prevent="login">
                <input type="email" v-model="email" placeholder="อีเมล" required />
                <input type="password" v-model="password" placeholder="พาสเวิร์ด" required />
                <div class="form-footer">
                    <a href="#" class="forgot-password">ลืมรหัสผ่าน ?</a>
                </div>
                <button type="submit" :disabled="isLoading">เข้าสู่ระบบ</button>
                <div v-if="error" class="error">{{ error }}</div>
            </form>
            <p class="signup-prompt">
                ยังไม่มีบัญชีใช่ไหม <a href="/register">สมัครสมาชิก</a>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            error: null,
            isLoading: false
        }
    },
    methods: {
        async login() {
            this.isLoading = true;
            this.error = null;

            try {
                const response = await this.$axios.$post('/auth/login', {
                    email: this.email,
                    password: this.password
                });
                // จัดการข้อมูลที่ได้รับจาก API เช่น บันทึก token หรือเปลี่ยนเส้นทาง
                console.log('Login successful:', response);
            } catch (error) {
                this.error = error.response ? error.response.data.message : 'Something went wrong';
                console.error('Login error:', this.error);
            } finally {
                this.isLoading = false;
            }
        }
    }
}

</script>

<style scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 1rem;
}

.login-form {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    text-align: center;
    width: 100%;
    max-width: 400px;
}

.login-form h2 {
    margin-bottom: 1rem;
}

.login-form p {
    margin-bottom: 1.5rem;
}

.login-form input {
    display: block;
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.form-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.form-footer .forgot-password {
    color: #007bff;
    text-decoration: none;
}

.form-footer .forgot-password:hover {
    text-decoration: underline;
}

button {
    width: 100%;
    background-color: #f5cb8b;
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
    .login-form {
        padding: 1.5rem;
    }
}

@media (max-width: 480px) {
    .login-form {
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