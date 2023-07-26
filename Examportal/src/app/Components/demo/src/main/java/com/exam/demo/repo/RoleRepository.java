package com.exam.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.demo.models.Roles;

public interface RoleRepository extends JpaRepository<Roles, Long> {

}
