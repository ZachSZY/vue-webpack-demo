import jenkinsapi
from jenkinsapi.jenkins import Jenkins
from jenkinsapi.utils.requester import Requester 
import json

J = Jenkins('http://20.26.20.103:8800', requester=Requester('devops103', 'devops103'))
# print J.version, J.keys()
# print dir(J['adcloud-coach-fe'])
job_name = 'adcloud-coach-fe'
build = J[job_name].get_last_build()
print '[%s] #%s: %s' % (job_name, build.get_number(), build.get_status())
