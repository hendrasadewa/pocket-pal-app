import baseKy from 'ky';

const baseAPIURL = import.meta.env.BASE_API_URL || 'http://localhost:3000';

const ky = baseKy.create({
  prefixUrl: `${baseAPIURL}/api`,
  headers: {
    'content-type': 'application/json',
  },
});

export default ky;
