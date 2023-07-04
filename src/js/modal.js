const ModalLSignUp = document.getElementById('ModalLSignUp')
const ModalLogin = document.getElementById('ModalLogin')
const BtnClose = document.getElementById('BtnClose')
const BtnCloseLogin = document.getElementById('BtnCloseLogin')
const SignUpBtn = document.getElementById('SignUpBtn')
const LoginBtn = document.getElementById('LoginBtn')

SignUpBtn.onclick = function() {
    ModalLSignUp.style.display = 'block'
    console.log('..')
};
        
LoginBtn.onclick = function() {
    ModalLogin.style.display = 'block'
    console.log('..')
};
        
BtnClose.onclick = function() {
    ModalLSignUp.style.display = 'none'
}
BtnCloseLogin.onclick = function() {
    ModalLogin.style.display = 'none'
}