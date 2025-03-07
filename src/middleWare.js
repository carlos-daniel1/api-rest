import tokenService from 'jsonwebtoken';

const mid = (req, res, next) => {
    const noAuthPaths = ["/api/user/login", "/About"];
    
    if (noAuthPaths.includes(req.path) || (req.path === '/api/user/' && req.method === 'POST')) {
        return next();
    }

    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: "Token ausente ou inválido" });
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: "Token ausente ou inválido" });
    }

    try {
        const tokenIsValid = tokenService.verify(token, process.env.SECRET);

        if (tokenIsValid) {
            return next();
        }

        throw new Error("Token inválido");

    } catch (err) {
        res.status(401).json({ msg: err.message });
    }
};

export default mid;
