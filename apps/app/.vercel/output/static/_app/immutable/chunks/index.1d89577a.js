var _=Object.defineProperty;var I=(e,n,t)=>n in e?_(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var b=(e,n,t)=>(I(e,typeof n!="symbol"?n+"":n,t),t);function T(e){return new TextEncoder().encode(e)}function c(e){const n=new Uint8Array(e);let t="";for(const a of n)t+=String.fromCharCode(a);return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function E(e){const n=e.replace(/-/g,"+").replace(/_/g,"/"),t=(4-n.length%4)%4,i=n.padEnd(n.length+t,"="),a=atob(i),r=new ArrayBuffer(a.length),o=new Uint8Array(r);for(let l=0;l<a.length;l++)o[l]=a.charCodeAt(l);return r}function g(){return(window==null?void 0:window.PublicKeyCredential)!==void 0&&typeof window.PublicKeyCredential=="function"}function p(e){const{id:n}=e;return{...e,id:E(n),transports:e.transports}}function A(e){return e==="localhost"||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e)}class s extends Error{constructor({message:t,code:i,cause:a,name:r}){super(t,{cause:a});b(this,"code");this.name=r??a.name,this.code=i}}function C({error:e,options:n}){var i,a;const{publicKey:t}=n;if(!t)throw Error("options was missing required publicKey property");if(e.name==="AbortError"){if(n.signal instanceof AbortSignal)return new s({message:"Registration ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:e})}else if(e.name==="ConstraintError"){if(((i=t.authenticatorSelection)==null?void 0:i.requireResidentKey)===!0)return new s({message:"Discoverable credentials were required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",cause:e});if(((a=t.authenticatorSelection)==null?void 0:a.userVerification)==="required")return new s({message:"User verification was required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",cause:e})}else{if(e.name==="InvalidStateError")return new s({message:"The authenticator was previously registered",code:"ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",cause:e});if(e.name==="NotAllowedError")return new s({message:e.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:e});if(e.name==="NotSupportedError")return t.pubKeyCredParams.filter(o=>o.type==="public-key").length===0?new s({message:'No entry in pubKeyCredParams was of type "public-key"',code:"ERROR_MALFORMED_PUBKEYCREDPARAMS",cause:e}):new s({message:"No available authenticator supported any of the specified pubKeyCredParams algorithms",code:"ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",cause:e});if(e.name==="SecurityError"){const r=window.location.hostname;if(A(r)){if(t.rp.id!==r)return new s({message:`The RP ID "${t.rp.id}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:e})}else return new s({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:e})}else if(e.name==="TypeError"){if(t.user.id.byteLength<1||t.user.id.byteLength>64)return new s({message:"User ID was not between 1 and 64 characters",code:"ERROR_INVALID_USER_ID_LENGTH",cause:e})}else if(e.name==="UnknownError")return new s({message:"The authenticator was unable to process the specified options, or could not create a new credential",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:e})}return e}class P{constructor(){b(this,"controller")}createNewAbortSignal(){if(this.controller){const t=new Error("Cancelling existing WebAuthn API call for new one");t.name="AbortError",this.controller.abort(t)}const n=new AbortController;return this.controller=n,n.signal}}const m=new P,S=["cross-platform","platform"];function y(e){if(e&&!(S.indexOf(e)<0))return e}async function U(e){var w;if(!g())throw new Error("WebAuthn is not supported in this browser");const t={publicKey:{...e,challenge:E(e.challenge),user:{...e.user,id:T(e.user.id)},excludeCredentials:(w=e.excludeCredentials)==null?void 0:w.map(p)}};t.signal=m.createNewAbortSignal();let i;try{i=await navigator.credentials.create(t)}catch(d){throw C({error:d,options:t})}if(!i)throw new Error("Registration was not completed");const{id:a,rawId:r,response:o,type:l}=i;let u;typeof o.getTransports=="function"&&(u=o.getTransports());let h;typeof o.getPublicKeyAlgorithm=="function"&&(h=o.getPublicKeyAlgorithm());let f;if(typeof o.getPublicKey=="function"){const d=o.getPublicKey();d!==null&&(f=c(d))}let R;return typeof o.getAuthenticatorData=="function"&&(R=c(o.getAuthenticatorData())),{id:a,rawId:c(r),response:{attestationObject:c(o.attestationObject),clientDataJSON:c(o.clientDataJSON),transports:u,publicKeyAlgorithm:h,publicKey:f,authenticatorData:R},type:l,clientExtensionResults:i.getClientExtensionResults(),authenticatorAttachment:y(i.authenticatorAttachment)}}function D(e){return new TextDecoder("utf-8").decode(e)}async function O(){const e=window.PublicKeyCredential;return e.isConditionalMediationAvailable!==void 0&&e.isConditionalMediationAvailable()}function K({error:e,options:n}){const{publicKey:t}=n;if(!t)throw Error("options was missing required publicKey property");if(e.name==="AbortError"){if(n.signal instanceof AbortSignal)return new s({message:"Authentication ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:e})}else{if(e.name==="NotAllowedError")return new s({message:e.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:e});if(e.name==="SecurityError"){const i=window.location.hostname;if(A(i)){if(t.rpId!==i)return new s({message:`The RP ID "${t.rpId}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:e})}else return new s({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:e})}else if(e.name==="UnknownError")return new s({message:"The authenticator was unable to process the specified options, or could not create a new assertion signature",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:e})}return e}async function v(e,n=!1){var R,w;if(!g())throw new Error("WebAuthn is not supported in this browser");let t;((R=e.allowCredentials)==null?void 0:R.length)!==0&&(t=(w=e.allowCredentials)==null?void 0:w.map(p));const i={...e,challenge:E(e.challenge),allowCredentials:t},a={};if(n){if(!await O())throw Error("Browser does not support WebAuthn autofill");if(document.querySelectorAll("input[autocomplete*='webauthn']").length<1)throw Error('No <input> with `"webauthn"` in its `autocomplete` attribute was detected');a.mediation="conditional",i.allowCredentials=[]}a.publicKey=i,a.signal=m.createNewAbortSignal();let r;try{r=await navigator.credentials.get(a)}catch(d){throw K({error:d,options:a})}if(!r)throw new Error("Authentication was not completed");const{id:o,rawId:l,response:u,type:h}=r;let f;return u.userHandle&&(f=D(u.userHandle)),{id:o,rawId:c(l),response:{authenticatorData:c(u.authenticatorData),clientDataJSON:c(u.clientDataJSON),signature:c(u.signature),userHandle:f},type:h,clientExtensionResults:r.getClientExtensionResults(),authenticatorAttachment:y(r.authenticatorAttachment)}}async function L(){return g()?PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable():!1}export{g as browserSupportsWebAuthn,O as browserSupportsWebAuthnAutofill,L as platformAuthenticatorIsAvailable,v as startAuthentication,U as startRegistration};
