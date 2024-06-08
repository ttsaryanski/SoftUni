function requestValidator(obj) {
    
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const uriPattern = /^[a-zA-Z0-9.]+$/;
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const messagePattern = /^[^<>\\&'"]*$/;

    if (!validMethods.includes(obj.method)) {
        throw new Error (`Invalid request header: Invalid Method`);
    };

    if (!obj.uri || (!obj.uri.match(uriPattern) && obj.uri !== '*')) {
        throw new Error (`Invalid request header: Invalid URI`);
    };

    if (!validVersions.includes(obj.version)) {
        throw new Error (`Invalid request header: Invalid Version`);
    };

    if (obj.message === undefined || !messagePattern.test(obj.message)) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return obj;

}

requestValidator(
    {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  }
  );