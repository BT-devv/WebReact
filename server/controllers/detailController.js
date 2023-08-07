const DetailDAO = require("../DAOs/detailDaos");

exports.checkId = async (req, res, next, val) => {
    try {
        const id = val;
        const detail = await DetailDAO.getDetail(id);
        if (!detail) {
            return res.status(404).json({
                code: 404,
                msg: `Không tìm thấy chi tiết sản phẩm với id ${id}`,
            });
        }
        req.detail = detail;
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            msg: error.toString(),
        });
    }
    next();
}

exports.getAllDetail = async (req, res) => {
    try {
        const details = await DetailDAO.getAllDetail();
        res.status(200).json({
            code: 200,
            msg: 'OK',
            data: {
                details
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            code: 500,
            msg: error.toString(),
        });
    }
};

exports.getDetail = async (req, res) => {
    try {
        const detail = req.detail;
        res.status(200).json({
            code: 200,
            msg: 'OK',
            data: { detail }
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            msg: error.toString(),
        });
    }
}

exports.createNewDetail = async (req, res) => {
    try {
        const detail = req.body;
        await DetailDAO.createDetail(detail);
        res.status(200).json({
            code: 200,
            msg: 'OK',
            data: { detail }
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            msg: error.toString(),
        });
    }
}

exports.updateDetail = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        await DetailDAO.updateDetailData(id, data);
        const detail = await DetailDAO.getDetail(id);
        res.status(200).json({
            code: 200,
            msg: 'OK',
            data: { detail }
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            msg: error.toString(),
        });
    }
}

exports.deleteDetail = async (req, res) => {
    try {
        const id = req.params.id;
        await DetailDAO.deleteDetail(id);
        res.status(200).json({
            code: 200,
            msg: 'OK',
            data: {}
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            msg: error.toString(),
        });
    }
}
