use dep::noir_string_search::{SubString, StringBody, SubString32, SubString64, StringBody256};
use dep::noir_base64_standard::{decode};

global MAX_DATA_LENGTH: u32 = 1024;
global MAX_DOMAIN_LENGTH: u32 = 50;
global NONCE_LENGTH: u32 = 32;
global B64_SKIP_CHARS: u32 = 300;
global B64_DECODE_LENGTH: u32 = 200;
global ENCODED_PAYLOAD_LENGTH: u32 = B64_DECODE_LENGTH * 3 / 4;

fn main(
    data: [u8; MAX_DATA_LENGTH],
    data_length: u32,
    domain_name: pub [u8; 50],
    domain_name_length: u32
) 
{
    let payload_start_index = 103;  
    assert(data[payload_start_index - 1] == 46);

    let mut payload_b64: [u8; B64_DECODE_LENGTH] = [0; B64_DECODE_LENGTH];
    for i in 0..B64_DECODE_LENGTH {
        payload_b64[i] = data[payload_start_index + B64_SKIP_CHARS + i];
    }
    let payload: [u8; ENCODED_PAYLOAD_LENGTH] = decode(payload_b64);

    validate_hd_field(payload, domain_name, domain_name_length);
}

// Validate the hd field in the payload is same as domain_name
fn validate_hd_field(payload: [u8; ENCODED_PAYLOAD_LENGTH], domain_name: [u8; 50], domain_name_length: u32) {
    let hd_prefix = "\"hd\":\"".as_bytes();
    let hd_prefix_substring: SubString32 = SubString::new(hd_prefix, hd_prefix.len());
    let domain_substring: SubString64 = SubString::new(domain_name, domain_name_length);
    let domain_needle: SubString64 = hd_prefix_substring.concat_into(domain_substring);

    let haystack: StringBody256 = StringBody::new(payload, payload.len());
    let (domain_found, domain_position): (bool, u32) = haystack.substring_match(domain_needle);
    
    assert(domain_found);

    // Assert the value after hd value is a `"` - to prevent partial match attacks
    assert(payload[domain_position + domain_needle.len()] == 34);
}

