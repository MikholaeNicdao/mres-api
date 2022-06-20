'use strict'

let dbconnect = require('../../config/database.config')
const date = new Date()

class mresQuery{

    // Create ADMIN account
    static createAdmin(userName, passWord, result){
        dbconnect.query('INSERT INTO admin (id, userName,passWord) VALUES (?,?,?)', ['', userName, passWord],(err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    // Login admin verification
    static loginAdmin(userName, result){
        dbconnect.query('SELECT * FROM admin WHERE userName=?',[userName], (err,res)=>{
            if(res.length === 0){
                result(null, err)
            }else{
                result(null, res)
            }
            
        })
    }

    // Fetching data from database
    static getSchedule(result){
        dbconnect.query('SELECT * FROM lms', (err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    static getAllFaculty(result){
        dbconnect.query('SELECT * FROM faculty', (err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    static getAllSchoolActivities(result){
        dbconnect.query('SELECT * FROM schoolactivities', (err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    static getByPageSA(page, result){
        const limit = 8;
        const startIndex = +page === 1 ? 0 : (page - 1) * limit
        dbconnect.query('SELECT * FROM schoolactivities ORDER BY createdAt DESC LIMIT ?, ?', [parseInt(startIndex), limit], (err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    static getByIdSA(id,result){
        dbconnect.query('SELECT * FROM schoolactivities WHERE id=?', [id], (err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    static getAllAnnouncements(result){
        dbconnect.query('SELECT * FROM announcements', (err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    static getByIdAnnouncements(id, result){
        dbconnect.query('SELECT * FROM announcements WHERE id=?', [id], (err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    static getByPageAnnouncements(page, result){
        const limit = 8;
        const startIndex = +page === 1 ? 0 : (page - 1) * limit
        dbconnect.query('SELECT * FROM schoolactivities ORDER BY createdAt DESC LIMIT ?, ?', [startIndex, limit], (err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    static getAllLCP(result){
        dbconnect.query('SELECT * FROM lcp ORDER BY page ASC', (err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    // Uploading file and data
    static scheduleUpload(title, description, location, date, time, result){
        dbconnect.query('INSERT INTO schedules (title, description, location, date, time) VALUES (?,?,?,?,?)', [title, description, location, date, time], (err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    static addFacultyMember(coverPhoto ,TPGL, prefix, firstName, middleInitial, lastName, category, position, result){
        dbconnect.query('INSERT INTO faculty (id, coverPhoto, teacherPerGradeLevel, prefix, firstName, middleInitial, lastName, category, position) VALUES (?,?,?,?,?,?,?,?,?)', [null, coverPhoto, TPGL, prefix, firstName, middleInitial, lastName, category, position], (err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    static schoolActivitiesUpload(coverPhoto, title, description, author, result){
        dbconnect.query('INSERT INTO schoolactivities (id, coverPhoto, title, description, author, createdAt) VALUES (?,?,?,?,?,?)', [null, coverPhoto, title, description,author, date], (err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    static announcementsUpload(coverPhoto, title, description,author, result){
        dbconnect.query('INSERT INTO announcements (id, coverPhoto, title, description, author, createdAt) VALUES (?,?,?,?,?,?)', [null, coverPhoto, title, description, author, date], (err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    static LCPUpload(coverPhoto, page, result){
        dbconnect.query('INSERT INTO lcp (id, coverPhoto, page, createdAt) VALUES (?,?,?,?)', [null, coverPhoto, page, date], (err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    // Deleting DATA's
    static deleteSchedule(result){
        dbconnect.query('DELETE FROM schedules WHERE schedulenote != "undefined"', (err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    static removeFacultyById(id, result){
        dbconnect.query('DELETE FROM faculty WHERE id=?', [id],(err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    static removeSAById(id, result){
        dbconnect.query('DELETE FROM schoolactivities WHERE id=?', [id],(err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    static removeAnnouncementsById(id, result){
        dbconnect.query('DELETE FROM announcements WHERE id=?', [id],(err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    static removeLCPById(id, result){
        dbconnect.query('DELETE FROM lcp WHERE id=?', [id],(err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    // UPDATING DATA's
    static updateSA(image,title,description,id, result){
        dbconnect.query('UPDATE schoolactivities SET coverPhoto=?, title=?, description=?, createdAt=? WHERE id=?', [image,title,description,date,id],(err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    static updateAnnouncements(image,title,description,id, result){
        dbconnect.query('UPDATE announcements SET coverPhoto=?, title=?, description=?, createdAt=? WHERE id=?', [image,title,description,date,id],(err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }
    
    static updateLCP(image,id, result){
        dbconnect.query('UPDATE lcp SET coverPhoto=?, createdAt=? WHERE id=?', [image,date,id],(err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    static updateFaculty(coverPhoto ,TPGL, prefix, firstName, middleInitial, lastName, position, id,result){
        dbconnect.query('UPDATE faculty SET coverPhoto=?, teacherPerGradeLevel=?, prefix=?, firstName=?, middleInitial=?, lastName=?, position=? WHERE id=?', [ coverPhoto, TPGL, prefix, firstName, middleInitial, lastName, position, id], (err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    //Pagination Navigation

    static async getTableLength(tableName){
        const res = await dbconnect.promise().query('SELECT COUNT(*) FROM '+ tableName)

        const tbLength = res[0][0]['COUNT(*)']

        let pageCount = tbLength%this.postCount === 0 
            ? tbLength/this.postCount
            : Math.floor(tbLength/this.postCount) + 1


        return pageCount
    }

}

module.exports = mresQuery