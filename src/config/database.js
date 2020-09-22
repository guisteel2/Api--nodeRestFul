const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/mymoney', { useNewUrlParser: true })


mongoose.Error.messages.general.require="O atributo '{PATH}' é obrigatorio"
mongoose.Error.messages.Number.mim = "O '{VALUE}' informado e menor que o limite minimo de '{MIM}'." 
mongoose.Error.messages.Number.max = "O '{VALUE}' informado e maior que o limite maximo de '{MAX}'."
mongoose.Error.messages.String.enum = "O valor nao e valido para o atributo'{PATH} ."