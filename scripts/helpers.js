
module.exports = {

    validateFields(obj) {

        let value = true;

        for(let key in obj) {

            if(obj.hasOwnProperty(key)) {

                if(obj[key] == null || obj[key].trim() === '') {

                    value = false;

                }

            }

        }

        return value;

    }

};