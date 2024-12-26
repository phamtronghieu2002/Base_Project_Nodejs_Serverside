import pool from "~/db/db";

class DatabaseModel {


    /**
     * Lấy danh sách bản ghi hoặc bản ghi theo điều kiện
     * @param {string} tableName - Tên bảng
     * @param {string} fields - Các cột cần lấy, mặc định là "*"
     * @param {string} where - Điều kiện WHERE, mặc định là "1"
     * @param {Array} conditions - Mảng giá trị cho điều kiện WHERE
     * @param {string} orderByField - Cột sắp xếp, mặc định là "id"
     * @param {string} orderBySort - Thứ tự sắp xếp ("ASC" hoặc "DESC"), mặc định là "DESC"
     * @param {number} offset - Vị trí bắt đầu, mặc định là 0
     * @param {number} limit - Số lượng bản ghi, mặc định là 10
     * @returns {Promise<Array>} - Danh sách bản ghi
     */
    async select(
        {
            tableName,
            fields = "*",
            where = "1",
            conditions = [],
            orderByField = "",
            orderBySort = "",
            offset = 0,
            limit = 10
        }
    ) {
        const query = `SELECT ${fields} FROM ${tableName} WHERE ${where} ORDER BY ${orderByField} ${orderBySort} LIMIT ${offset}, ${limit}`;
        const [rows] = await pool.execute(query, conditions);
        return rows;
    }

    /**
     * Thêm một bản ghi vào bảng
     * @param {string} tableName - Tên bảng
     * @param {Object} data - Đối tượng chứa dữ liệu cần thêm
     * @returns {Promise<Object>} - Kết quả của truy vấn
     */
    async insert(tableName, data) {
        const keys = Object.keys(data).join(", ");
        const placeholders = Object.keys(data).map(() => "?").join(", ");
        const values = Object.values(data);

        const query = `INSERT INTO ${tableName} (${keys}) VALUES (${placeholders})`;
        const [result] = await pool.execute(query, values);
        return result;
    }

    /**
     * Cập nhật bản ghi
     * @param {string} tableName - Tên bảng
     * @param {Object} data - Đối tượng chứa dữ liệu cần cập nhật
     * @param {string} where - Điều kiện WHERE, mặc định là "id = ?"
     * @param {Array} conditions - Mảng giá trị cho điều kiện WHERE
     * @returns {Promise<Object>} - Kết quả của truy vấn
     */
    async update(tableName, data, where = "id = ?", conditions = []) {
        const updates = Object.keys(data).map(key => `${key} = ?`).join(", ");
        const values = [...Object.values(data), ...conditions];

        const query = `UPDATE ${tableName} SET ${updates} WHERE ${where}`;
        const [result] = await pool.execute(query, values);
        return result;
    }

    /**
     * Xóa bản ghi
     * @param {string} tableName - Tên bảng
     * @param {string} where - Điều kiện WHERE, mặc định là "id = ?"
     * @param {Array} conditions - Mảng giá trị cho điều kiện WHERE
     * @returns {Promise<Object>} - Kết quả của truy vấn
     */
    async delete(tableName, where = "id = ?", conditions = []) {
        const query = `DELETE FROM ${tableName} WHERE ${where}`;
        const [result] = await pool.execute(query, conditions);
        return result;
    }

    /**
     * Đếm số lượng bản ghi
     * @param {string} tableName - Tên bảng
     * @param {string} where - Điều kiện WHERE, mặc định là "1"
     * @param {Array} conditions - Mảng giá trị cho điều kiện WHERE
     * @returns {Promise<number>} - Số lượng bản ghi
     */
    async count(tableName, where = "1", conditions = []) {
        const query = `SELECT COUNT(*) as count FROM ${tableName} WHERE ${where}`;
        const [rows] = await pool.execute(query, conditions);
        return rows[0]?.count || 0;
    }

    /**
     * Lấy bản ghi duy nhất theo điều kiện
     * @param {string} tableName - Tên bảng
     * @param {string} fields - Các cột cần lấy, mặc định là "*"
     * @param {string} where - Điều kiện WHERE, mặc định là "id = ?"
     * @param {Array} conditions - Mảng giá trị cho điều kiện WHERE
     * @returns {Promise<Object|null>} - Bản ghi hoặc null nếu không tìm thấy
     */
    async findOne(tableName, fields = "*", where = "id = ?", conditions = []) {
        const query = `SELECT ${fields} FROM ${tableName} WHERE ${where} LIMIT 1`;
        const [rows] = await pool.execute(query, conditions);
        return rows[0] || null;
    }

    /**
     * Lấy các bản ghi với điều kiện IN
     * @param {string} tableName - Tên bảng
     * @param {string} field - Cột để áp dụng điều kiện IN
     * @param {Array} values - Mảng giá trị cho điều kiện IN
     * @param {string} fields - Các cột cần lấy, mặc định là "*"
     * @param {string} orderByField - Cột sắp xếp, mặc định là "id"
     * @param {string} orderBySort - Thứ tự sắp xếp ("ASC" hoặc "DESC"), mặc định là "DESC"
     * @returns {Promise<Array>} - Danh sách bản ghi
     */
    async selectIn(tableName, field, values, fields = "*", orderByField = "id", orderBySort = "DESC") {
        const placeholders = values.map(() => "?").join(", ");
        const query = `SELECT ${fields} FROM ${tableName} WHERE ${field} IN (${placeholders}) ORDER BY ${orderByField} ${orderBySort}`;
        const [rows] = await pool.execute(query, values);
        return rows;
    }

    /**
     * Kiểm tra sự tồn tại của bản ghi
     * @param {string} tableName - Tên bảng
     * @param {string} where - Điều kiện WHERE, mặc định là "id = ?"
     * @param {Array} conditions - Mảng giá trị cho điều kiện WHERE
     * @returns {Promise<boolean>} - True nếu bản ghi tồn tại, ngược lại là False
     */
    async exists(tableName, where = "id = ?", conditions = []) {
        const query = `SELECT 1 FROM ${tableName} WHERE ${where} LIMIT 1`;
        const [rows] = await pool.execute(query, conditions);
        return rows.length > 0;
    }

    /**
     * Tính tổng một cột
     * @param {string} tableName - Tên bảng
     * @param {string} column - Cột cần tính tổng
     * @param {string} where - Điều kiện WHERE, mặc định là "1"
     * @param {Array} conditions - Mảng giá trị cho điều kiện WHERE
     * @returns {Promise<number>} - Tổng giá trị của cột
     */
    async sum(tableName, column, where = "1", conditions = []) {
        const query = `SELECT SUM(${column}) as total FROM ${tableName} WHERE ${where}`;
        const [rows] = await pool.execute(query, conditions);
        return rows[0]?.total || 0;
    }

    /**
     * Lấy giá trị lớn nhất của một cột
     * @param {string} tableName - Tên bảng
     * @param {string} column - Cột cần tìm giá trị lớn nhất
     * @param {string} where - Điều kiện WHERE, mặc định là "1"
     * @param {Array} conditions - Mảng giá trị cho điều kiện WHERE
     * @returns {Promise<number>} - Giá trị lớn nhất
     */
    async max(tableName, column, where = "1", conditions = []) {
        const query = `SELECT MAX(${column}) as maxVal FROM ${tableName} WHERE ${where}`;
        const [rows] = await pool.execute(query, conditions);
        return rows[0]?.maxVal || null;
    }


    /**
 * Lấy giá trị trung bình của một cột
 * @param {string} tableName - Tên bảng
 * @param {string} column - Cột cần tính giá trị trung bình
 * @param {string} where - Điều kiện WHERE, mặc định là "1"
 * @param {Array} conditions - Mảng giá trị cho điều kiện WHERE
 * @returns {Promise<number>} - Giá trị trung bình
 */
    async avg(tableName, column, where = "1", conditions = []) {
        const query = `SELECT AVG(${column}) as avgVal FROM ${tableName} WHERE ${where}`;
        const [rows] = await pool.execute(query, conditions);
        return rows[0]?.avgVal || 0;
    }

    /**
     * Lấy dữ liệu với điều kiện phân trang (pagination)
     * @param {string} tableName - Tên bảng
     * @param {string} fields - Các cột cần lấy, mặc định là "*"
     * @param {string} where - Điều kiện WHERE, mặc định là "1"
     * @param {Array} conditions - Mảng giá trị cho điều kiện WHERE
     * @param {string} orderByField - Cột sắp xếp, mặc định là "id"
     * @param {string} orderBySort - Thứ tự sắp xếp ("ASC" hoặc "DESC"), mặc định là "DESC"
     * @param {number} page - Số trang (bắt đầu từ 1), mặc định là 1
     * @param {number} limit - Số lượng bản ghi trên mỗi trang, mặc định là 10
     * @returns {Promise<Object>} - Dữ liệu phân trang bao gồm danh sách và thông tin phân trang
     */
    async paginate(
        tableName,
        fields = "*",
        where = "1",
        conditions = [],
        orderByField = "id",
        orderBySort = "DESC",
        page = 1,
        limit = 10
    ) {
        const offset = (page - 1) * limit;
        const query = `SELECT ${fields} FROM ${tableName} WHERE ${where} ORDER BY ${orderByField} ${orderBySort} LIMIT ${offset}, ${limit}`;
        const [rows] = await pool.execute(query, conditions);

        const totalQuery = `SELECT COUNT(*) as total FROM ${tableName} WHERE ${where}`;
        const [totalResult] = await pool.execute(totalQuery, conditions);
        const total = totalResult[0]?.total || 0;

        return {
            data: rows,
            pagination: {
                total,
                currentPage: page,
                totalPages: Math.ceil(total / limit),
                limit,
            },
        };
    }
}

export default DatabaseModel;