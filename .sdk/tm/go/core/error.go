package core

type CloudflareZeroTrustError struct {
	IsCloudflareZeroTrustError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewCloudflareZeroTrustError(code string, msg string, ctx *Context) *CloudflareZeroTrustError {
	return &CloudflareZeroTrustError{
		IsCloudflareZeroTrustError: true,
		Sdk:              "CloudflareZeroTrust",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *CloudflareZeroTrustError) Error() string {
	return e.Msg
}
