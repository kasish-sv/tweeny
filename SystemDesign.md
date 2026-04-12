Functional Requirement:
2 roles - Tweeny and User

    User -> Enters task required with time range, skill required and address
    Tweeny -> Can see available tasks and accept task
    Once accepted, details forwarded over mail

## DB Design

TASK_TYPE
task_name
wages_rate

USER
user_name
user_email
user_type
user_rating

TASKS
user_id
tweeny_id
start_dt_tm
end_dt_tm
wages
address
geolocation
