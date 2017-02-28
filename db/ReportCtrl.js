const Report = require('./db').Report;


const getReports = (req, res, next) => {
  Report.find({}, (err, reportsFound) => {
    console.log("found reports!", reportsFound);
    res.locals.reportsFound = reportsFound;
    next();
  })
}

const makeReport = (req, res, next) => {
  console.log(req.body);
  const reportBody = req.body
  Report.create({
    title: reportBody.title,
    subtitle: reportBody.subtitle,
    content: reportBody.content,
    author: reportBody.author
  }, (err, reportCreated) => {
    if (err) {
      console.log("there was an error: ", err)
    } else {
      console.log('report ', reportCreated, 'created successfully!')
    }
    next();
  })
}

exports.makeReport = makeReport;
exports.getReports = getReports;