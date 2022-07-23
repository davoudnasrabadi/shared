export interface IJwtDecoded {
	iat?: number;
	jti?: string;
	sub?: string;
	exp?: number;
}
