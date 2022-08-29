const { cryptoService } = require('../services/provider');

module.exports = async ({ req }) => {
    const auth = req.headers.authorization
    
    const token = auth && auth.substring(7);
    
    let user = null
    let admin = false;
    
    if (token) { 
        let conteudoToken = cryptoService.decode(token);
        if (new Date(conteudoToken.exp * 1000) > new Date()) {
            user = conteudoToken;
        }
    }
    
    if (user && user.role) {
        admin = user.role === 'admin';
    }

    const err = new Error('Acesso negado!');

    return {
        user,
        admin,
        validarUsuario() {
            if(!user) throw err;
        },
        validarAdmin() {
            if(!admin) throw err;
        },
        validarUsuarioFiltro(filter) {
            if (admin) return 
            if (!user) throw err;
            if (!filter) throw err;
            
            const { id, email } = filter;

            if (!id && !email) throw err;
            if (id && id !== user.id) throw err;
            if (email && email !== user.email) throw err;
        }
    }
}