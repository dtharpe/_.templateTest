var link = 'http://cfusion.sph.emory.edu/RSPH-API/index.cfm/faculty/getFaculty.json?dept=1,2&interest=2,16',
data = getAPI(link),
template = $("#people").html();


console.log(data);

$("#container")
.html(_.template(template,{data:data}));
