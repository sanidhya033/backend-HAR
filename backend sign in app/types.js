const zod = require('zod');

  const gatherinfo=zod.object({
        name:zod.string(),
        email:zod.string().email(),
        subject:zod.string(),
        mssg:zod.string()
    });

    module.exports={
        gatherinfo:gatherinfo,
       
    }