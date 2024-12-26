/**
 * Hàm tổng quát để xử lý dữ liệu thành cấu trúc dạng nhóm
 * @param {Array} rows - Dữ liệu thô từ cơ sở dữ liệu
 * @param {String} groupKey - Khóa để nhóm dữ liệu (vd: 'user_id')
 * @param {Object} childMapping - Định nghĩa cách ánh xạ dữ liệu con
 *        {
 *          key: 'posts',  // Tên property chứa danh sách con
 *          childKeys: ['post_id', 'title'] // Các cột liên quan đến dữ liệu con hoặc '*' để lấy toàn bộ
 *        }
 * @returns {Array} - Dữ liệu đã được xử lý
 */
export function transformData(rows, groupKey, childMapping) {
    return rows.reduce((acc, row) => {
        // Tìm kiếm nhóm cha
        let parent = acc.find(item => item[groupKey] === row[groupKey]);
        if (!parent) {
            // Nếu chưa tồn tại nhóm, tạo mới
            parent = { ...row };
            childMapping.childKeys.forEach(key => {
                // Nếu childKeys là "*", xóa các trường con khỏi cha
                if (key !== "*") {
                    delete parent[key];
                }
            });
            parent[childMapping.key] = [];
            acc.push(parent);
        }

        // Nếu childKeys có "*", lấy tất cả các key từ trường khóa trở đi
        const childData = {};
        if (childMapping.childKeys.includes("*")) {
            let startCopying = false;
            Object.keys(row).forEach(key => {
                // Bắt đầu sao chép từ khi gặp khóa đầu tiên là khóa con
                if (startCopying) {
                    childData[key] = row[key];
                }

                if (key === childMapping.childKeys[0]) {
                    startCopying = true;
                    childData[key] = row[key]; // Thêm trường khóa con đầu tiên vào childData
                }
            });
        } else {
            childMapping.childKeys.forEach(key => {
                if (key !== "*") {
                    childData[key] = row[key];
                }
            });
        }

        // Chỉ thêm vào nếu dữ liệu con có giá trị
        if (Object.keys(childData).length > 0) {
            parent[childMapping.key].push(childData);
        }

        return acc;
    }, []);
}
