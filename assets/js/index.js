$(function () {
    console.log(1);

    $("#link_reg").on("click", function () {
        $(".login-box").hide()
        $(".reg-box").show()
    })

    $("#link_login").on("click", function () {
        $(".login-box").show()
        $(".reg-box").hide()
    })

    // 自定义校验规则
    var form = layui.form
    form.verify({
        // 定义一个pwd校验规则
        pwd: [/^[\S]{6,12}$/, '密码必须是6-12位，且不能出现空格']
    })
})