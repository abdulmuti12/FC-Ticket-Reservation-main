package service

import "fmt"

type PartnerFactory interface {
	CreatePartner(partnerID int) (Partner, error)
}

type DefaultPartnerFactory struct {
	partnerBaseURLS map[int]string
}

func NewPartnerFactory(partnerBaseURLS map[int]string) PartnerFactory {
	return &DefaultPartnerFactory{partnerBaseURLS: partnerBaseURLS}
}

func (f *DefaultPartnerFactory) CreatePartner(partnerID int) (Partner, error) {
	baseURL, ok := f.partnerBaseURLS[partnerID]
	if !ok {
		return nil, fmt.Errorf("partner %d not found", partnerID)
	}

	switch partnerID {
	case 1:
		return &Partner1{BaseURL: baseURL}, nil
	case 2:
		return &Partner2{BaseURL: baseURL}, nil
	default:
		return nil, fmt.Errorf("partner %d not supported", partnerID)
	}
}
